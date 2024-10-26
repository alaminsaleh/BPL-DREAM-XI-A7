import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Header/Navbar';
import Players from './components/Players/Players';
import Available from './components/AvailableSection/Available';
import SelectedInfo from './components/SelectedInfo/SelectedInfo';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  const [coins, setCoin] = useState(0);
  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available'
  });
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleIsActiveState = (status) => {
    setIsActive({
      available: status === 'available',
      status: status
    });
  };

  const handleAddCoins = () => {
    setCoin(coins + 3000000);
    toast.success('Credit Added to your account', {
      position: "top-center",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      icon: "✔️"
    });
  };

  const handleSelectPlayer = (player) => {
    if (selectedPlayers.length < 6) {
      const playerExists = selectedPlayers.find(p => p.id === player.id);

      if (!playerExists) {
        if (coins >= player.price) {
          setCoin(coins - player.price);
          setSelectedPlayers([...selectedPlayers, player]);
          toast.success(`Congrats!! ${player.name} is now in your squad.`, {
            position: "top-center",
            autoClose: 2000,
            icon: "✔️"
          });
        } else {
          toast.error('Not enough coins to add this player!', {
            position: "top-center",
            autoClose: 3000,
            icon: "⚠️"
          });
        }
      } else {
        toast.error('Player already selected', {
          position: "top-center",
          autoClose: 2000,
          icon: "⚠️"
        });
      }
    } else {
      toast.error('You have exceeded the limit to choose players.', {
        position: "top-center",
        autoClose: 3000,
        icon: "⚠️"
      });
    }
  };

  const handleRemovePlayer = (id) => {
    setSelectedPlayers(selectedPlayers.filter(player => player.id !== id));
    toast.error('Removed the player!', {
      position: "top-center",
      autoClose: 3000,
      icon: "⚠️"
    });
  };

  const handleAddMorePlayer = () => {
    setIsActive({
      available: true,
      status: 'available'
    });
  };

  return (
    <div>
      <ToastContainer />
      <Navbar coins={coins}></Navbar>
      <Banner handleAddCoins={handleAddCoins}></Banner>
      <Available
        handleIsActiveState={handleIsActiveState}
        isActive={isActive}
        selectedCount={selectedPlayers.length} // Pass the count of selected players
      ></Available>
      {isActive.available ? (
        <Players onSelectPlayer={handleSelectPlayer}></Players>
      ) : (
        <SelectedInfo players={selectedPlayers} onRemovePlayer={handleRemovePlayer}
          handleAddMorePlayer={handleAddMorePlayer}
          ></SelectedInfo>
      )}
      <Footer></Footer>
      <Newsletter></Newsletter>
    </div>
  );
}

export default App;
