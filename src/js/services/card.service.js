// Product Cards
import iconPerson from '../../assets/images/home/icons/icon-person.svg';
import iconCog from '../../assets/images/home/icons/icon-cog.svg';
import iconChart from '../../assets/images/home/icons/icon-chart.svg';
// Stories Cards
import avatarKady from '../../assets/images/home/avatars/avatar-kady.jpg';
import avatarAiysha from '../../assets/images/home/avatars/avatar-aiysha.jpg';
import avatarArthur from '../../assets/images/home/avatars/avatar-arthur.jpg';
import iconQuotes from '../../assets/images/home/icons/icon-quotes.svg';


export const cardService = {
    query
}

function query(cardsType) {
    switch (cardsType) {
        case 'product':
            return [
                {
                    src: iconPerson,
                    txt: 'Our network is made up of highly experienced professionals who are passionate about what they do.'
                },
                {
                    src: iconCog,
                    title: 'Easy to Implement',
                    txt: 'Our processes have been refined over years of implementation meaning our teams always deliver.'
                },
                {
                    src: iconChart,
                    title: 'Enhanced Productivity',
                    txt: 'Our customized platform with in-built analytics helps you manage your distributed teams.'
                }
            ]
        case 'stories':
            return [
                {
                    src: avatarKady,
                    title: 'Kady Baker',
                    txt: '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
                    quotes: iconQuotes
                },
                {
                    src: avatarAiysha,
                    title: 'Aiysha Reese',
                    txt: '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
                    quotes: iconQuotes
                },
                {
                    src: avatarArthur,
                    title: 'Arthur Clarke',
                    txt: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
                    quotes: iconQuotes
                }
            ]
    }
}