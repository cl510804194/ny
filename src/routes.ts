import EnergyMonitor from '@/pages/EnergyMonitor';
// import About from '@/pages/About';
import EnergyApiCheck from '@/pages/EnergyAPIcheck';
import EnergyCarbon from '@/pages/EnergyCarbon';
import Collect from '@/pages/Collect';
import NotFound from '@/components/NotFound';
import Fan from '@/pages//Fan';
import ElectricCollect from '@/pages/ElectricCollect';
import ElectricFan from '@/pages/ElectricFan';
import LoadForecast from '@/pages/LoadForecast';
import NeedCollect from '@/pages/NeedCollect';
import NeedSuggest from '@/pages/NeedSuggest';
import Simulate from '@/pages/Simulate';
import TacticsUsers from '@/pages/TacticsUsers';
import Map from '@/pages/Map';
const routes = [
  {
    path: '/energy/monitor',
    component: EnergyMonitor
  },
  {
    path: '/energy/apicheck',
    component: EnergyApiCheck
  },
  {
    path: '/energy/carbon',
    component: EnergyCarbon
  },
  {
    path: '/collect',
    component: Collect
  },
  {
    path: '/electric/collect',
    component: ElectricCollect
  },
  {
    path: '/electric/fan',
    component: ElectricFan
  },
  {
    path: '/load/forecast',
    component: LoadForecast
  },
  {
    path: '/need/collect',
    component: NeedCollect
  },
  {
    path: '/need/suggest',
    component: NeedSuggest
  },
  {
    path: '/fan',
    component: Fan
  },
  {
    path: '/map',
    component: Map
  },
  {
    path: '/simulate',
    component: Simulate
  },
  {
    path: '/tactics/users',
    component: TacticsUsers
  },
  {
    path: '/',
    exact: true,
    component: EnergyMonitor
  },
  {
    component: NotFound
  }
];

export default routes;
