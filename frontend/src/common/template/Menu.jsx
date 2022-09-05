import React from "react";

import MenuItem from "./MenuItem";
import MenuTree from "./MenuTree";

export default (props) =>{
    return(
        <ul className="sidebar-menu">
            <MenuItem path="#" icon='dashboard' label='Dashboard'/>
            <MenuTree label='Cadastro' icon="edit">
                <MenuItem path='#cicloDePagamento' label="Ciclos de pagamento" icon='usd'/>
            </MenuTree>
        </ul>    
    )
}