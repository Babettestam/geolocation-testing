import Appstate from './appstate.model';

export default {
  async create(req, res) {
    try {
      const appstate = await Appstate.create(req.body);
      return res.json(appstate);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },

  async get(req, res) {
    try {
      const { user } = req.params;

      const appstate = await Appstate.find(user ? {user} : undefined).sort({'timestamp': 'desc'});;
      return res.json(appstate);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  
  async delete(req, res) {
    try {
      const { id } = req.params;
      const appstate = await Appstate.findOneAndRemove({ _id: id });
      if (!appstate) {
        return res.status(404).json({ err: 'could not find appstate' });
      }
      return res.json(appstate);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
};
