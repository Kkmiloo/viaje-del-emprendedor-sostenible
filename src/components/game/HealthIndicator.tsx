import { useGameStore } from "../../store"

export const HealthIndicator = () => {
    const { lives } = useGameStore();
    const totalLives = 3 -lives
    
    return <div>{'🧡'.repeat(lives) + '🖤'.repeat(totalLives)}</div>;
}
