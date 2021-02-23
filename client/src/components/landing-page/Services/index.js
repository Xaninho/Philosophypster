import React from 'react'
import Icon1 from '../../../assets/images/ideas.svg'
import Icon2 from '../../../assets/images/meeting.svg'
import Icon3 from '../../../assets/images/social.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}></ServicesIcon>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>
                        We help you connect to other philosophers and increase your knowledge
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}></ServicesIcon>
                    <ServicesH2>Wellness Tracker</ServicesH2>
                    <ServicesP>
                        We help you connect to other philosophers and increase your knowledge
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}></ServicesIcon>
                    <ServicesH2>Mobile Responsive</ServicesH2>
                    <ServicesP>
                        We help you connect to other philosophers and increase your knowledge
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
