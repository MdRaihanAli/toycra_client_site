import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './Home.css'
import Categori1 from './categori/Categori1';
import Categori2 from './categori/Categori2';
import Categori3 from './categori/Categori3';

function Categoris() {
    return (
        <div className='container py-md-5 py-3'>
            <h2 className='fw-bold mb-3 text-center'>Select Your <span className='tomato_color'>Choose</span></h2>
            <Tabs>
                <TabList>
                    <Tab>sports </Tab>
                    <Tab>Truck</Tab>
                    <Tab>Reguler</Tab>
                </TabList>

                <TabPanel>
                   <Categori1></Categori1>
                </TabPanel>


                <TabPanel>
                    <Categori2></Categori2>
                </TabPanel>


                <TabPanel>
                    <Categori3></Categori3>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Categoris