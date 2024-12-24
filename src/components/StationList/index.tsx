import { ServiceStation } from "../../App";
import StationCard from "../StationCard";
import "./StationList.css"

type StationListProps = { serviceStations: ServiceStation[] };

export default function StationList({
  serviceStations,
}: StationListProps) {
  return (
    <div className="station-card-list">
      {serviceStations.map((station, index) => (
        <StationCard key={index} station={station}></StationCard>
      ))}
    </div>
  );
}
