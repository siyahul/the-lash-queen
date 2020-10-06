import React, { useState } from 'react';
import { HomePageBg, HomePageButtonWrapper, HomePageContainer, HomePageContent, HomePageH1, HomePageP, ImageBg,ArrowFarward,ArrowRight } from './HomeElements';
import Sidebar from '../../Sidebar';
import NavBar from '../../Navbar';
import Background from '../../Images/background.png' 
import { Button } from '../../ButtonElement';
import Footer from '../../Footer';

function Home() {
    const [isOpen,setIsOpen] = useState(false);
    const [hover,setHover] = useState(false);

    const onHover = ()=>{
        setHover(!hover);
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
        <Sidebar toggle={toggle} isOpen={isOpen}/>
        <NavBar toggle={toggle}/>
        <HomePageContainer >
            <HomePageBg>
                <ImageBg src={Background}/>
            </HomePageBg>
            <HomePageContent>
                <HomePageH1>
                    The lash Queen
                </HomePageH1>
                <HomePageP>
                    The Bridal Makeover, Beauty Saloon, And Makeup Academy
                </HomePageP>
                <HomePageButtonWrapper>
                    <Button href="tel:+917736941196" primary='true' dark='true' onMouseEnter={onHover} onMouseLeave={onHover}>
                        Call Now {hover? <ArrowFarward/>:<ArrowRight />}
                    </Button>
                </HomePageButtonWrapper>
            </HomePageContent>
        </HomePageContainer>
        <Footer />
        </>
    )
}

export default Home
