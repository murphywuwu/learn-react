const Form = ({ isSubmitted, buttonText }) => {
  // 属性操作，事件绑定，DOM更新
  if (isSubmitted) {
    return {
      type: Message,
      props: {
        text: 'Success!'
      }
    }
  }

  return {
    type: Button,
    props: {
      children: buttonText,
      color: 'blue'
    }
  }
}