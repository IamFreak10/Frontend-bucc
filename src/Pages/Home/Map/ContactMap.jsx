'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { ExternalLink } from 'lucide-react';

export default function UltraClearMap() {
  const position = [22.66000953888792, 90.36253524936025];
  const googleMapsUrl = `https://www.google.com/maps?q=${position[0]},${position[1]}`;

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
    /* FIX 1: '-z-10' remove kora hoyeche, 'relative' add kora hoyeche */
    <section className="w-full relative py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-[#004d26] tracking-tighter uppercase italic">
                Live <span className="text-[#004d26]">Location</span>
            </h2>
            <p className="text-sm font-bold text-gray-400 mt-1 uppercase tracking-widest">University of Barishal Campus</p>
          </div>
          
          <a 
            href={googleMapsUrl}
            target="_blank"
            className="group flex items-center gap-3 bg-[#004d26] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#00361b] transition-all shadow-lg"
          >
            OPEN GOOGLE MAPS <ExternalLink size={18} />
          </a>
        </div>

        {/* FIX 2: Container e z-0 rakha hoyeche jate navbar (z-50) er niche thake */}
        <div className="relative h-[500px] md:h-[650px] rounded-[2.5rem] overflow-hidden border-4 border-slate-50 shadow-2xl z-0">
          <MapContainer 
            center={position} 
            zoom={19} 
            scrollWheelZoom={true} 
            className="h-full w-full sharp-render"
          >
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
              maxZoom={22}
            />
            
            <Marker position={position} icon={BUCCLogoMarker}>
              <Popup closeButton={false} className="raw-popup">
                <div className="w-40 bg-white rounded-lg overflow-hidden shadow-xl">
                  <div className="bg-[#004d26] p-2 text-center text-white text-[10px] font-black uppercase">
                    BUCC Office
                  </div>
                  <div className="p-3">
                    <img src="/BUCC Logo_20260111_171506_0000.png" className="w-full h-auto object-contain" />
                  </div>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <style jsx global>{`
        /* FIX 3: Leaflet er default z-index komiye dewa jate sticky navbar er niche thake */
        .leaflet-pane {
          z-index: 0 !important;
        }
        .leaflet-top, .leaflet-bottom {
          z-index: 10 !important;
        }

        .sharp-render {
          image-rendering: -webkit-optimize-contrast;
        }

        .marker-container-raw {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .marker-card-raw img {
          width: 100px;
          height: 100px;
          object-fit: contain;
          filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3));
        }

        .marker-arrow {
          width: 0; height: 0; 
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 10px solid #004d26;
        }

        .raw-popup .leaflet-popup-content-wrapper {
          padding: 0;
          background: transparent;
          box-shadow: none;
        }
        .raw-popup .leaflet-popup-content { margin: 0; }
        .raw-popup .leaflet-popup-tip-container { display: none; }
      `}</style>
    </section>
  );
}