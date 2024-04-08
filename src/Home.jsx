import React, { useRef } from 'react' 
function Home() {
const scrollTab = useRef();


return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>Temirlan</span>
            </div>
            <div className="des">
                {/* 30 */}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores officiis beatae repellendus rem ullam, ipsam nemo dolorem dolorum illo laborum. Ea sed dolor ab qui, doloremque accusantium esse blanditiis possimus!
            </div>
            
            <a href="#" target="_blank" rel="noopener noreferrer" className='animation active '>
                My Github account
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="avatar" />
            </div>
        </div>
    </section>
    )
}

export default Home
