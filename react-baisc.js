/* Transformation */
function NameBox(name) {
  return { fontWeight: 'bold', labelContent: name };
}

// 'Sebastian Mrkbage' -> { fontWeight: 'bold', labelContent: 'Sebastian Markbage' }

/* Abstraction */
function FancyUserBox(user) {
  return {
    borderStyle: '1px solid blue',
    childContent: [
      'Name: ',
      NameBox(user.firstName + '' + user.lastName)
    ]
  }
}

// { firstName: 'Sebastian', lastName: 'Markbage' } ->
// {
//   borderStyle: '1px solid blue',
//   childContent: [
//     'Name: ',
//     { fontWeight: bold, labelContent: 'Sebastian Margbage' }
//   ]
// }

/* Composition */
function FancyBox(children) {
  return {
    borderStyle: '1px solid blue',
    children: children
  }
}

function UserBox(user) {
  return FancyBox([
    'Name: ',
    NameBox(user.firstName + ' ' + user.lastName)
  ]);
}
/* State */
// side-effects
// my actual model of this is that they return the next version of state during an 'update' pass.

function FancyNameBox(user, likes, onClick) {
  return FancyBox([
    'Name ', NameBox(user.firstName + ' ' + user.lastName),
    'Likes', LikeBox(likes),
    LikeButton(onClick)
  ])
}

var likes = 0;
function addOneMoreLike() {
  likes++;
  rerender();
}

// init
FancyNameBox(
  {firstName: 'Sebastian', lastName: 'Margbage'},
  likes,
  addOneMoreLike
)

/* Memoization */
function memoize(fn) {
  var cachedArg;
  var cachedResult;

  return function(arg) {
    if (cachedArg === arg) {
      return cachedResult;
    }
    cachedArg = arg;
    cachedResult = fn(arg);
    return cachedResult;
  }
}

var MemoizedNameBox = memoize(NameBox);

function NameAndAgeBox(user, currentTime) {
  return FancyBox([
    'Name: ',
    MemoizedNameBox(user.firstName + ' ' + user.lastName),
    'Aage in milliseconds: ',
    currentTime - user.dateOffBirth
  ]);
}

/* Lists */
function UserList(users, likesPerUser, updateUserLikes) {
  return users.map(user => FancyBox(
    user,
    likesPerUser.get(user.id),
    () => updateUserLikes(user.id, likesPerUser.get(user.id) + 1)
  ));
}

var likesPerUser = new Map();
function updateUserLikes(id, likeCount) {
  likesPerUser.set(id, likeCount);
  rerender();
}


UserList(data.users, likesPerUser, updateUserLikes);

/* Continuations */
function FancyUserList(users) {
  return FancyBox(
    UserList.bind(null, users)
  )
}

const box = FancyUserList(data.users);
const resolvedChildren = box.children(likesPerUser, updateUserLikes);
const resolvedBox = {
  ...box,
  children: resolvedChildren
}

/* State Map */
function FancyBoxWithState(
  children,
  stateMap,
  updateState
) {
  return FancyBox(
    children.map(child => child.continuation(
      stateMap.get(child.key),
      updateState
    ))
  )
}

function UserList(users) {
  return users.map(user => {
    continuation: FancyNameBox.bind(null, user),
    key: user.id
  })
}

function FancyUserList(users) {
  return FancyBoxWithState.bind(null, UserList(users));
}

const continuation = FancyUserList(data.users);
continuation(likesPerUser, updateUserLikes)