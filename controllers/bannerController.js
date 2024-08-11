const Banner = require('../models/banner');

exports.getBanner = async (req, res) => {
  try {
    const banner = await Banner.findOne();
    res.json(banner);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch banner' });
  }
};


exports.updateBanner = async (req, res) => {
  try {
    const [banner, created] = await Banner.upsert(req.body);
    if (created) {
      res.status(201).json({ message: 'Banner created successfully' });
    } else {
      res.status(200).json({ message: 'Banner updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update banner' });
  }
};

