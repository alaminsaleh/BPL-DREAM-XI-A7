import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Header/Navbar';
import Players from './components/Players/Players';
import Available from './components/AvailableSection/Available';
import SelectedInfo from './components/SelectedInfo/SelectedInfo';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpperCard from './components/UpperCard/UpperCard';

function App() {
  const [coins, setCoin] = useState(0);
  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available'
  });

  // State for selected players
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleIsActiveState = (status) => {
    setIsActive({
      available: status === 'available',
      status: status
    });
  };

  const handleAddCoins = () => {
    setCoin(coins + 3000000);
  };


const handleSelectPlayer = (player) => {
  // Check players less than 6
  if (selectedPlayers.length < 6) {
    // player is already selected
    const playerExists = selectedPlayers.find(p => p.id === player.id);

    // If player is not already selected
    if (!playerExists) {
      // player price less than or equal to the coins
      if (coins >= player.price) {
        // Deduct player price from coins
        setCoin(coins - player.price);
        // Add player to selected
        setSelectedPlayers([...selectedPlayers, player]); 
        //   react toastify 
        toast.success(`Congrats!! ${player.name} is now in your squad.`, {
          position: "top-center",
          autoClose: 2000,
          progressClassName: 'progress-bar-red',
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          icon: "✔️"
        });
      } else {
        // not enough coins, show error
        toast.error('Not enough coins to add this player!', {
          position: "top-center",
          autoClose: 3000,
          progressClassName: 'progress-bar-red',
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          icon: "⚠️"
        });
      }
    } else {
      // player already selected, show error 
      toast.error('Player already selected', {
        position: "top-center",
        autoClose: 2000,
        progressClassName: 'progress-bar-red',
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        icon: "⚠️"
      });
    }
  } else {
    //  alert if more than 6 players
    toast.error('You have exceeded the limit to choose players.', {
      position: "top-center",
      autoClose: 3000,
      progressClassName: 'progress-bar-red',
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      icon: "⚠️"
    });
  }
};



  const handleRemovePlayer = (id) => {
    setSelectedPlayers(selectedPlayers.filter(player => player.id !== id));
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
      {/* Navbar */}
      <Navbar coins={coins}></Navbar>
      {/* Banner */}
      <Banner handleAddCoins={handleAddCoins}></Banner>
      {/* Available and Selected section */}
      <Available handleIsActiveState={handleIsActiveState} isActive={isActive}></Available>
      {/*  */}
      {isActive.available ? (
        <Players onSelectPlayer={handleSelectPlayer}></Players>
      ) : (
        <SelectedInfo players={selectedPlayers} onRemovePlayer={handleRemovePlayer}
          handleAddMorePlayer={handleAddMorePlayer}></SelectedInfo>
      )}
      {/* Footer */}

      {/* UpperCard/Subscribe Card */}
      <UpperCard></UpperCard>
    </div>
  );
}

export default App;
