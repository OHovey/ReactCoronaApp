import React from 'react';


const Footer = () => (
    <div className = 'container-fluid bg-dark' style = {{
        minHeight: 80, 
        marginTop: 100,
        position: 'static',
        bottom: 0
    }}>
        <div className = 'row' style = {{ paddingTop: 25 }}>
            <div className = "col-sm-4">
                <p style = {{ color: '#ff5757' }}><a style = {{ color: '#ff5757' }} target="_blank" href="https://icons8.com/icons/set/virus">Virus icon</a> <span style = {{ color: 'grey' }}>by</span> <a style = {{ color: '#ff5757' }} target="_blank" href="https://icons8.com">Icons8</a></p>
            </div>
            <div className = "col-sm-4 text-center"></div>
            <div className = "col-sm-4 text-right"><a className = 'text-center' style = {{ color: '#ff5757' }} href = "https://github.com/OHovey/ReactCoronaApp"><small>Github Repo Here</small></a></div>
        </div>
    </div>
)

export default Footer