import React from 'react'
import './AdminLayout.scss'
import { LoginAdmin } from '../../pages/Admin'
import { useAuth } from '../../hooks'
import { SideMenu, TopMenu } from '../../components/Admin'

export function AdminLayout(props) {
    const { children } = props;
    //console.log(useAuth())
    const { auth } = useAuth();

    if(!auth){
        return <LoginAdmin />;
    }else{
        return (
            <div className='admin-layout'>
                <div className="admin-layout__menu">
                    <TopMenu />
                </div>
                <div className="admin-layout__main-content">
                    <SideMenu>
                        { children }
                    </SideMenu>
                </div>
            </div>
        )
    }
}
