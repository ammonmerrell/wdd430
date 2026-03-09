

import  LikeButton from './like-button';
    
       function createTitle(title) {
        if (title) {
            return title;
        } else {
            return 'Default title';
        }
       }

       function Header({ title}) {
        return <h1>{title ? title : 'Default title'}</h1>;
       }

       export default function HomePage() {

       

        function HomePage() {
            const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
           
            
            return (
                <div>
                    <Header title="Develop. Preview. Ship." />
                    <ul>
                        {names.map((name) => (
                            <li key={name}>{name}</li>
                        ))}
                        </ul>
                        <LikeButton />
                </div>
            );
        }
   
       }

            