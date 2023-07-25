import { useOutletContext } from 'react-router-dom';

function HostVanPhotos() {
  const { van } = useOutletContext();
  return van ? <img src={van.imageUrl} alt={van.name} className="w-48" /> : null;
}

export default HostVanPhotos;
