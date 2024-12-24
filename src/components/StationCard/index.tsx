import { ServiceStation } from "../../App";
import "./StationCard.css"

export default function StationCard({ station }: { station: ServiceStation }) {
  return <div className="station-card" data-testid="station-card">
    <div>{station.address}</div>
    <div style={{ fontWeight: "lighter" }}>{station.city} {station.zip}</div>
    <div style={{ fontWeight: "lighter" }}>{station.distance!.toFixed(2)} mi</div>
  </div>
}
