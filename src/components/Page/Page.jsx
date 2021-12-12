import './Page.css'

const Page = (props) => {

  return (
    <div className='PageContent'>
      {props.children}
    </div>
  );
}

export default Page;