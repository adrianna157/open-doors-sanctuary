import HeaderText from "../../components/HeaderText";
import SearchBar from "../../components/SearchBar"
export default function GuestDashboard() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-hacky-50">
        <div>
          <HeaderText noBold fontSize="text-4xl" className=" text-white pb-2pr">
            Discover an Open Door
            </HeaderText>
            <h3 className="text-white text-center mb-12 pr">
                Helping The Crisis in Ukraine
            </h3>
          <SearchBar />
        </div>
      </div>
    );
}
