import AudioPlayer from '@/components/AudioPlayer';

// Tipos para los audios
interface AudioFile {
  id: string;
  title: string;
  description: string;
  timeOfDay: 'Mañana' | 'Mediodía' | 'Tarde';
  location: string;
  date: string;
  path: string;
}

// Función para obtener la fecha formateada desde el nombre del archivo
const getFormattedDate = (dateStr: string) => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const [day, month, year] = dateStr.split('_');
  return `${day} ${months[parseInt(month) - 1]} ${year}`;
};

// Datos de ejemplo para los audios (ajusta según tus necesidades)
const audioFiles: AudioFile[] = [
  // Mañana
  {
    id: 'm1',
    title: 'Amanecer en La Churca',
    description: 'Sonidos del amanecer en el Río Norte, capturando el despertar de la naturaleza.',
    timeOfDay: 'Mañana',
    location: 'La Churca',
    date: getFormattedDate('08_11_2024'),
    path: '/audios/LaChurca_RíoPacairigua_CuencaAlta_TomaV1_130924_111342_Mañana/audio.mp3'
  },
  {
    id: 'm2',
    title: 'Cascada Matinal',
    description: 'El sonido relajante de la cascada en las primeras horas de la mañana.',
    timeOfDay: 'Mañana',
    location: 'Waraira Repano',
    date: getFormattedDate('10_05_2025'),
    path: '/audios/WarairaRepano_RuinasHaciendaElNorte_TomaV1_100525_114409_Mañana/audio.mp3'
  },
  // Agrega más audios de mañana...

  // Mediodía
  {
    id: 'md1',
    title: 'Río al Mediodía',
    description: 'El sonido del río en su punto más activo del día.',
    timeOfDay: 'Mediodía',
    location: 'La Churca',
    date: getFormattedDate('16_10_2024'),
    path: '/audios/LaChurca_RíoPacairigua_CuencaAlta_TomaV2_161024_123910_Mediodía/audio.mp3'
  },
  // Agrega más audios de mediodía...

  // Tarde
  {
    id: 't1',
    title: 'Atardecer en el Cañón',
    description: 'Los últimos rayos de sol iluminando el cañón con sonidos de aves nocturnas.',
    timeOfDay: 'Tarde',
    location: 'Cañón del Norte',
    date: getFormattedDate('08_11_2024'),
    path: '/audios/LaChurca_CañónDelNorte_RíoNorte_CuencaBaja_TomaV1_081124_125938_Tarde/audio.mp3'
  },
  // Agrega más audios de tarde...
];

// Agrupar audios por franja horaria
const audioByTimeOfDay = audioFiles.reduce((acc, audio) => {
  if (!acc[audio.timeOfDay]) {
    acc[audio.timeOfDay] = [];
  }
  acc[audio.timeOfDay].push(audio);
  return acc;
}, {} as Record<string, AudioFile[]>);

export default function ColeccionesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Colección de Sonidos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sumérgete en los sonidos de la naturaleza, capturados en diferentes momentos del día.
          </p>
        </div>

        {Object.entries(audioByTimeOfDay).map(([timeOfDay, audios]) => (
          <section key={timeOfDay} className="mb-16">
            <div className="border-b border-gray-200 pb-2 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">
                {timeOfDay === 'Mañana' ? '🌅 Amanecer' : 
                 timeOfDay === 'Mediodía' ? '☀️ Mediodía' : '🌇 Tarde/Noche'}
                }
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audios.map((audio) => (
                <AudioPlayer
                  key={audio.id}
                  src={audio.path}
                  title={audio.title}
                  description={audio.description}
                  timeOfDay={audio.timeOfDay as 'Mañana' | 'Mediodía' | 'Tarde'}
                  location={audio.location}
                  date={audio.date}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
