import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export const Nav = () => {
    
    const [activeItem, setActiveItem] = useState('home')
    
    return (
        <Menu pointing secondary>
            
            <Menu.Menu position="left">
                <Link to="/">
                    <Menu.Item
                        icon=''
                        active={activeItem === 'home'}
                        onClick={e => setActiveItem(e.target.name)}
                    />
                </Link>
            </Menu.Menu>
            
            <Menu.Menu position='right'>
                <Link to='randomizer'>
                    <Menu.Item
                        name='randomizer'
                        icon=''
                        active={activeItem === 'ramdomizer'}
                        onClick={e => setActiveItem(e.target.name)}
                    />
                </Link>
            </Menu.Menu>

            <Menu.Menu position='right'>
                <Menu.Item
                    name='friends'
                    icon=''
                    active={activeItem === 'friends'}
                    onClick={e => setActiveItem(e.target.name)}
                />
            </Menu.Menu>

            <Menu.Menu position='right'>
                <Link to="">
                    <Menu.Item
                        name='TFTactics'
                        icon=''
                    />
                </Link>
            </Menu.Menu>
        </Menu>
    )
}



    //

    

            /*  Fungerar!

                import Paper from '@material-ui/core/Paper';
                import Tabs from '@material-ui/core/Tabs';
                import Tab from '@material-ui/core/Tab';

                import { getToken } from "./AuthHelper"


                <Paper>
            <Tabs
                value={selectedCat}
                onChange={(event, index) =>
                {
                    if(index === 2 && getToken() === null) {
                        index = 1
                    }
                    
                    onSelect(index)
                }}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
               <Tab label="Home" component={Link} to="/" />
               <Tab label="Login" component={Link} to="/login" />
               <Tab label="Chat" component={Link} to="/chat" />  

               
            </Tabs>
        </Paper>
            */