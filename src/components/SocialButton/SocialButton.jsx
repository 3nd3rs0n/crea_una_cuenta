


const SocialButton = ({instagram,facebook,youtube}) => {

  return (
    <div>
        <i className=" instagram m-3 text-info">{instagram}</i>
        <i className="m-3 text-primary">{facebook}</i>
        <i className="m-3 text-danger">{youtube}</i>
    </div>
  )
}

export default SocialButton