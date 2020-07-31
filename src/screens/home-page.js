import React from 'react';
import MonthCard from '../components/month-card';
import './home-page.css';


const HomePage = () => {
    return(
        <div>
           
        <div className='container-set'>
        <div className='row'>
                <div className='col-lg-3'>
                    <h1> The Agha Khan <span className='justify-content-center'>University</span> </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className='col-lg-9'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <MonthCard month="January" onClick={() => console.log("this is january") } />
                            <MonthCard month="May"/>
                            <MonthCard month="September"/>
                        </div>

                        <div className='col-lg-3'>
                            <MonthCard month="Febuary"/>
                            <MonthCard month="June"/>
                            <MonthCard month="Octuber"/>
                        </div>

                        <div className='col-lg-3'>
                            <MonthCard month="March"/>
                            <MonthCard month="July"/>
                            <MonthCard month="November"/>
                        </div>

                        <div className='col-lg-3'>
                            <MonthCard month="April"/>
                            <MonthCard month="August"/>
                            <MonthCard month="December"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
        </div>
    )
}

export default HomePage;