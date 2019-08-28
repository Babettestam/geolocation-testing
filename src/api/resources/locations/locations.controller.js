import Location from './locations.model';

export default {
  async create(req, res) {
    try {
      const location = await Location.create(req.body);
      return res.json(location);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

  async get(req, res) {
    try {
      const { user } = req.params;

      const location = await Location.find(user ? {user} : undefined).sort({'timestamp': 'desc'});
      return res.json(location);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  
  async delete(req, res) {
    try {
      const { id } = req.params;
      const location = await Location.findOneAndRemove({ _id: id });
      if (!location) {
        return res.status(404).json({ err: 'could not find location' });
      }
      return res.json(location);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
};
