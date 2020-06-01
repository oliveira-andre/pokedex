class PokemonsController {
  async index(req, res) {
    return res.json({ ok: true });
  }
}

export default new PokemonsController();
