'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { ExternalLink, Target } from 'lucide-react';

export default function UltraClearMap() {
  const position = [22.66000953888792, 90.36253524936025];
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;

  // High-Resolution Logo Marker logic
  const BUCCLogoMarker = new L.DivIcon({
    html: `
      <div class="marker-container-raw">
        <div class="marker-card-raw">
          <img src="/BUCC Logo_20260111_171506_0000.png" alt="BUCC" />
        </div>
        <div class="marker-arrow"></div>
      </div>
    `,
    className: 'bucc-icon-raw',
    iconSize: [60, 60],
    iconAnchor: [30, 60],
  });

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header: Simplified & Direct */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-black text-[#004d26] tracking-tighter uppercase italic">
               Live <span className="text-[#004d26]">Location</span>
            </h2>
            <p className="text-sm font-bold text-gray-400 mt-1 uppercase tracking-widest">University of Barishal Campus</p>
          </div>
          
          <a 
            href={googleMapsUrl}
            target="_blank"
            className="group flex items-center gap-3 bg-[#004d26] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#a7cfbb] transition-all"
          >
            OPEN GOOGLE MAPS <ExternalLink size={18} />
          </a>
        </div>

        {/* MAP CONTAINER: No Overlays, Max Clarity */}
        <div className="relative h-[500px] md:h-[700px] rounded-[2rem] overflow-hidden border-2 border-gray-100">
          <MapContainer 
            center={position} 
            zoom={19} 
            scrollWheelZoom={false}
            zoomControl={true} // Enabled for easier navigation
            className="h-full w-full sharp-render"
          >
            {/* Direct Google Satellite High-Res API */}
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
              maxZoom={22}
              className="google-tiles-raw"
            />
            
            <Marker position={position} icon={BUCCLogoMarker}>
              <Popup closeButton={false} className="raw-popup">
                <div className="p-2 text-center">
                  <p className="font-black text-[#004d26] text-sm">BUCC OFFICE</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <style jsx global>{`
        /* 1. Clear Engine: No Filters, No Shadows */
        .sharp-render {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }

        .google-tiles-raw {
          filter: contrast(1.1) brightness(1.05); /* Just a touch of pop */
        }

        /* 2. Sharp Marker: No Blur */
        .marker-container-raw {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

     

        .marker-card-raw img {
          width: 140px;
          height: 140px;
          object-fit: contain;
          image-rendering: pixelated; /* Keeps logo edges sharp */
        }
          @media (max-width: 768px) {
            .marker-card-raw img {
              width: 80px;
              height: 80px;
            }
          }

        .marker-arrow {
          width: 0; 
          height: 0; 
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #004d26;
          margin-top: -1px;
        }

        /* 3. Simple Popup */
        .raw-popup .leaflet-popup-content-wrapper {
          border-radius: 8px;
          padding: 0;
          border-bottom: 4px solid #ff8c00;
        }
        .raw-popup .leaflet-popup-tip { display: none; }
      `}</style>
    </section>
  );
}