import AddToMyPlantsButton from '../../components/AddToMyPlantsButton';

const plantsData = [
  {
    id: '1',
    slug: 'monstera-deliciosa',
    name: 'Monstera Deliciosa',
    image: 'https://images.unsplash.com/photo-1614728509439-d36c0a7f1a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'The Swiss cheese plant is famous for its natural leaf holes. It\'s a relatively easy-care plant that adds a tropical touch.',
    light: 'Bright, indirect light. Avoid direct sunlight which can scorch leaves.',
    water: 'Water when the top 2-3 inches of soil are dry. Allow excess water to drain.',
    humidity: 'Prefers high humidity but tolerates average indoor levels. Mist occasionally.',
    difficulty: 'Easy to Moderate',
    notes: 'Rotate regularly for even growth. Wipe leaves to remove dust.'
  },
  {
    id: '2',
    slug: 'pothos',
    name: 'Pothos (Devil\'s Ivy)',
    image: 'https://images.unsplash.com/photo-1594951475510-91a1e058e1c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'A very forgiving and versatile trailing plant, perfect for beginners. Comes in many varieties.',
    light: 'Low to bright indirect light. Variegated varieties need more light to maintain color.',
    water: 'Allow soil to dry out almost completely between waterings. Prone to root rot if overwatered.',
    humidity: 'Tolerates average indoor humidity.',
    difficulty: 'Very Easy',
    notes: 'Can be propagated easily from cuttings.'
  },
  {
    id: '3',
    slug: 'snake-plant',
    name: 'Snake Plant (Sansevieria)',
    image: 'https://images.unsplash.com/photo-1601369792030-a94f6f966138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Known for its stiff, upright, sword-like leaves. Extremely tolerant of neglect.',
    light: 'Low light to bright indirect light. Will do best in medium to bright indirect light.',
    water: 'Water thoroughly only when soil is completely dry. Less is more with snake plants.',
    humidity: 'Tolerates low humidity well.',
    difficulty: 'Very Easy',
    notes: 'Excellent air purifier. Avoid cold drafts.'
  },
  {
    id: '4',
    slug: 'zz-plant',
    name: 'ZZ Plant (Zamioculcas zamiifolia)',
    image: 'https://images.unsplash.com/photo-1599596041764-5cf93510e12d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'The ZZ plant is famous for being incredibly drought-tolerant and forgiving, making it ideal for beginners.',
    light: 'Low to bright indirect light. Avoid direct sun.',
    water: 'Water when the soil is completely dry, usually every 2-4 weeks. Can go longer.',
    humidity: 'Tolerates average to low humidity.',
    difficulty: 'Very Easy',
    notes: 'All parts of the plant are toxic if ingested.'
  },
  {
    id: '5',
    slug: 'peace-lily',
    name: 'Peace Lily (Spathiphyllum)',
    image: 'https://images.unsplash.com/photo-1598460592476-c567a5074d28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Elegant plant with white flowers. Known for signalling its thirst by drooping.',
    light: 'Medium to low indirect light. Too much light can scorch leaves, too little can prevent flowering.',
    water: 'Keep soil consistently moist but not soggy. Water when the top inch of soil feels dry.',
    humidity: 'Prefers high humidity. Mist regularly or use a pebble tray.',
    difficulty: 'Moderate',
    notes: 'Wilt when thirsty, perking up after watering.'
  },
  {
    id: '6',
    slug: 'spider-plant',
    name: 'Spider Plant (Chlorophytum comosum)',
    image: 'https://images.unsplash.com/photo-1627916946002-861f1c84f4e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Known for its arching leaves and small "spiderettes" that hang from the mother plant, perfect for propagation.',
    light: 'Bright, indirect light. Can tolerate some direct morning sun.',
    water: 'Keep soil consistently moist, but allow the top inch to dry out between waterings. Avoid overwatering.',
    humidity: 'Tolerates average indoor humidity but appreciates occasional misting.',
    difficulty: 'Easy',
    notes: 'One of the best air-purifying plants. Brown tips can indicate fluoride in water.'
  }
];

export default function PlantDetailPage({ params }) {
  const { slug } = params;
  const plant = plantsData.find(p => p.slug === slug);

  if (!plant) {
    return (
      <div className="container text-center">
        <h1 style={{ marginTop: '5rem' }}>Plant Not Found</h1>
        <p>The plant you are looking for does not exist in our library.</p>
      </div>
    );
  }

  return (
    <div className="container plant-detail-container">
      <div className="plant-detail-image-wrapper">
        <img src={plant.image} alt={plant.name} className="plant-detail-image" />
      </div>
      <div className="plant-detail-info glass-card">
        <h2>{plant.name}</h2>
        <p>{plant.description}</p>

        <h3>Care Guide</h3>
        <ul>
          <li><strong>Light:</strong> {plant.light}</li>
          <li><strong>Water:</strong> {plant.water}</li>
          <li><strong>Humidity:</strong> {plant.humidity}</li>
          <li><strong>Difficulty:</strong> {plant.difficulty}</li>
          {plant.notes && <li><strong>Notes:</strong> {plant.notes}</li>}
        </ul>

        <AddToMyPlantsButton
          plantId={plant.id}
          plantName={plant.name}
          plantSlug={plant.slug}
          plantImage={plant.image}
        />
      </div>
    </div>
  );
}
