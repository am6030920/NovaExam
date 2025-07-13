import React from 'react';
import './home.css';

function Home() {
    return (
        <div>
            <div
                className="navbar"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9999,
                    margin: 0,
                    padding: '0 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'linear-gradient(270deg, rgb(255, 245, 202), rgb(84, 209, 101), rgb(255, 245, 202))',
                    backgroundSize: '400% 400%',
                    height: '10vh',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

                }}
            >
                <img
                    src="https://dynamic.design.com/asset/logo/b777bb05-ef3a-40c1-81e5-c218a4b7311f/logo?logoTemplateVersion=1&v=638750126514600000&text=+NovaExam+online+exam+potel&layout=auto"
                    alt="NovaExam Logo"
                    style={{
                        width: '100px',
                        height: '75px',
                        padding: '0',
                        margin: '0',
                        marginLeft: '-19px',
                    }}
                />
                <h1 style={{ color: 'red', display: 'flex',color:'#00b386',paddingRight:'1180px'}}>
                    Nova
                    <span style={{ fontWeight: '150', marginLeft: '' ,color:'rgba(2, 113, 97, 0.732)'}}>Exam</span>
                </h1>
            </div>
        </div>
    );
}

export default Home;
