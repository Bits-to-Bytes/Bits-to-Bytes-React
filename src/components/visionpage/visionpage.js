import VisionCard from './visionCard';

import './visionpage.css'

const VisionPage = () => {
    return (
        <div className="vision-page" id="vision">
            <VisionCard icon="fas fa-rocket rocket" title="What is BitsToBytes?" info="Bits to bytes is a programming club of GEC Bhavnagar, which works for the development of
                students. Also, the club is an opportunity bundle which includes many fields of knowledge. Explore it in
                your ways and learn it through us!"/>
            <VisionCard icon="fas fa-lightbulb bulb" title="Mission" info="To educate students so they get exposure to the technical world and enlighten their skills.
                Hence , the programming club will highlight all the skills of the individual members and develop in a
                meaningful way."/>
            <VisionCard icon="fas fa-users user" title="Who is it for?" info="Bits to bytes is for EVERYONE who want to learn something and then want to share.The club
                believes in helping any individual and also using their skills to upgrade the club"/>
        </div>
    );
}

export default VisionPage;