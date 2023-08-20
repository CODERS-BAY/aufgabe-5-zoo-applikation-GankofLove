namespace ZooAPI.Model
{
    // Tier-Modell
    public class Tier
    {
        // Konstruktor
        public Tier(int id, string gattung, string nahrung, int gehegeId)
        {
            Id = id; // Tier-ID
            Gattung = gattung; // Tiergattung (z.B. Löwe, Tiger)
            Nahrung = nahrung; // Nahrung des Tiers
            GehegeId = gehegeId; // ID des Geheges, in dem das Tier sich befindet
        }

        public string Gattung { get; set; }

        public int GehegeId { get; set; }

        public string Nahrung { get; set; }

        public int Id { get; set; }
    }
}