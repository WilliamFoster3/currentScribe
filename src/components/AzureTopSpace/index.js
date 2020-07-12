import React from 'react'
import './index.css'
import Options from './AzureOptions'
import SwipeableTemporaryDrawer from '../../components/AzureDrawer'
import PersistentDrawerLeft from '../newDrawer'
import {useSelector} from 'react-redux'


// JavaScript functions used: setTimeout, clearTimeout, bind, getElementById,
// addEventListener, removeEventListener
// React functions used: constructor, setState, componentDidMount, render
// class AzureTopSpace extends React.Component {
//      render() {
//           var h = '32vh'; // I don't remember why I set the height like this.
//           // The Options component takes a function as a prop.
//           return (
//                <div className="AzureTopSpace" id="outer" style={{ height: h }}>
//                      <div >
//                     <div className="item-wrapper">
//                         <SwipeableTemporaryDrawer color = "secondary"/>
//                     </div>
//                     </div>
//                </div>
//           )
//      }
// }
//
// export default AzureTopSpace;

export default function AzureTopSpace(props){

          var h = props.height; // I don't remember why I set the height like this.
          // The Options component takes a function as a prop.
          const meh = (state) => state.meh
          const setting = useSelector(meh)
          var choice = setting ? "none" : "block"
          return (
               <div className="AzureTopSpace" id="outer" style={{ height: h}}>
                    <div >
                          <div className="item-wrapper" >
                              <PersistentDrawerLeft color = {props.color}/>
                         </div>

                    </div>
               </div>
          )
}
