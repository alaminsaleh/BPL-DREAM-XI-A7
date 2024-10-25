import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Header/Navbar';
import Players from './components/Players/Players';
import Available from './components/AvailableSection/Available';
import SelectedInfo from './components/SelectedInfo/SelectedInfo';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  // Check if the selected players are less than 6
  if (selectedPlayers.length < 6) {
    // Use find to check if the player is already selected
    const playerExists = selectedPlayers.find(p => p.id === player.id);

    // If the player is not already selected
    if (!playerExists) {
      // Check if the player price is less than or equal to the coins
      if (coins >= player.price) {
        // Deduct player price from coins
        setCoin(coins - player.price);

        // Add player to the squad
        setSelectedPlayers([...selectedPlayers, player]);

        // Show success toast notification
        toast.success(`Congrats!! ${player.name} is now in your squad.`, {
          position: "top-center",
          autoClose: 2000, // Closes after 2 seconds
          progressClassName: 'progress-bar-red',
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          icon: "✔️"
        });
      } else {
        // If not enough coins, show error toast notification
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
      // If player is already selected, show an error toast notification
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
    // Show alert if more than 6 players are selected 
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
  // Redirect back to the Available section when "Add More Player" is clicked
  const handleAddMorePlayer = () => {
    setIsActive({
      available: true,
      status: 'available'
    });
  };

  return (
    <div>
      <ToastContainer /> {/*Toast container for displaying notifications*/}
      <Navbar coins={coins}></Navbar>
      <Banner handleAddCoins={handleAddCoins}></Banner>
      {/* Available and Selected section */}
      <Available handleIsActiveState={handleIsActiveState} isActive={isActive}></Available>

      {isActive.available ? (
        <Players onSelectPlayer={handleSelectPlayer}></Players>
      ) : (
        <SelectedInfo players={selectedPlayers} onRemovePlayer={handleRemovePlayer}
          handleAddMorePlayer={handleAddMorePlayer}></SelectedInfo>
      )}
    </div>
  );
}

export default App;
