import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';

const RightSidebar = () => {
    return (
        <div>
            {/* .........Social Login...........  */}
            <SocialLogin></SocialLogin>

            {/* .........Find Us on...........  */}
            <FindUs></FindUs>
        </div>
    );
};

export default RightSidebar;