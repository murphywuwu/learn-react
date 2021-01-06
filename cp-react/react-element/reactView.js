const Form = ({ isSubmitted, buttonText }) => {
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