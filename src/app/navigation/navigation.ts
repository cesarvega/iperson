import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        children: [
           
           {
                id: 'Wall',
                title: 'My Wall',
                type: 'item',
                icon: 'money',
                url: '/wall',
                badge: {
                    title: '50',
                    bg: 'blue',
                    fg: '#FFFFFF'
                }
            } ,
            {
                id: 'service',
                title: 'My services',
                type: 'item',
                icon: 'monetization_on',
                url: '/serviceList',
                badge: {
                    title: '5',
                    bg: 'green',
                    fg: '#FFFFFF'
                }
            }
            , {
                id: 'profile',
                title: 'My profile',
                type: 'item',
                icon: 'fingerprint',
                url: '/profile'
            }
        ]
    }

];
