import Promotion from '../../routes/promotion/promotion.component';
import Navigation from '../../routes/navigation/navigation.component';
import QuickLinks from '../../routes/quick-links/quick-links.component';
import Footer from '../footer/footer.component';
import OurStoryComponent from './our-story-component';

const OurStory = () => {
    return (
        <>
            <Promotion />
            <Navigation />
            <OurStoryComponent/>
            <QuickLinks />
            <Footer />
                </>
    );
};

export default OurStory;
