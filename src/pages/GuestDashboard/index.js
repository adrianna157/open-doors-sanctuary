import { useState } from "react";
import HeaderText from "../../components/HeaderText";
import SearchBar from "../../components/SearchBar"
import HostingList from '../../components/DetailedHostPreview/HostingList';
import hosts from '../../assets/data/hosts.json'
import styles from '../../components/DetailedHostPreview/local.module.css'

export default function GuestDashboard() {
    const [filter, setFilter] = useState('');

    const updateHosts = (location) => {
      setFilter(location)
    } 

    return (
      <div className="min-h-screen flex items-center justify-center bg-hacky-50">
        <div>
          <HeaderText noBold fontSize="text-4xl" className="text-center text-white pb-2pr">
            Discover an Open Door
            </HeaderText>
            <h3 className="text-white text-center mb-12 pr">
                Helping The Crisis in Ukraine
            </h3>
          <SearchBar onClick={updateHosts} />
          <HostingList hostSummaries={filter ? hosts.filter( (host) => host.location.trim().toLowerCase().includes(filter.trim().toLowerCase()) ) : hosts} />
        </div>
      </div>
    );
}
