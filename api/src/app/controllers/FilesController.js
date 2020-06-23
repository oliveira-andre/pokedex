import File from '../models/File';

class FilesController {
  async create(req, res) {
    const { originalname: name, filename: path } = req.file;
    const file = await File.create({ name, path });

    return res.json(file);
  }

  async show(req, res) {
    const file = await File.findByPk(req.params.id);

    return res.json(file);
  }
};

export default new FilesController();
