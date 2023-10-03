import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-12 mb-5' src="https://i.ibb.co/chd2RMw/logo.png" alt="" />
            <p className="text-lg font-normal mb-3">Journalism Without Fear or Favour</p>
            <p className='text-xl mb-8'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;