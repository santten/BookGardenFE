import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

const NotFoundPage = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center h-96'>
      <h1 className='text-6xl font-title mb-4'>404 Not Found</h1>
      <p className='text-xl mb-5'>This page does not exist</p>
      <Link
        to='/'
        className='text-white flex flex-row items-center justify-center gap-[0.5rem] hover:bg-accent bg-primary-dark font-semibold rounded-[99px] px-[1.25rem] py-2 mt-4'
      >
        <Icon icon="tdesign:arrow-left" width="1.25rem" className="mt-[0.1rem]"></Icon>Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;
  