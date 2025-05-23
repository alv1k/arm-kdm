import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavbar } from '../../store/navbarSlice';
import useMediaQueries from '../../hooks/useMediaQueries'; 
import styles from './TheHeader.module.css'

const sprite_path = '/src/assets/images/i.svg';
const TheHeader = () => {
  const { xl_breakpoint, lg_breakpoint, md_breakpoint, sm_breakpoint } = useMediaQueries();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleNavbar());
  };
  return (
    <header className="lg:px-20 md:px-6 px-0 text-[#203887] bg-white py-5 flex">
      {
        (sm_breakpoint || md_breakpoint) &&
          <svg
            className={`icon md:my-auto md:ms-0 ms-5 ${md_breakpoint ? styles.icon_md : ''}`}
            onClick={handleClick}
          >
            <use href={`${sprite_path}#menu-icon`} />
          </svg>
        
      }
      <div className="flex lg:ms-0 md:ms-13 ms-16">
        <img className="lg:w-8 md:w-8 w-5" src="./src/assets/images/Logo.png" alt="" />
        <p className=" lg:text-2xl md:text-2xl text-sm uppercase font-bold lg:ms-5 md:ms-5 ms-2 my-auto" style={{fontFamily: 'PT Sans'}}>комдрагметалл рс(я)</p>
      </div>
      <div className="lg:flex md:flex lg:ms-auto md:ms-auto hidden" >
        <span className="lg:mr-10 md:mr-4 font-semibold text-xl mt-[0.35rem] ">
          ООО «Название»
        </span>
        <img src="../src/assets/images/Ellipse.png" alt=""  />
      </div>
    </header>
  )
}
export default TheHeader;