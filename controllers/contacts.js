const { Contact } = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const results = await Contact.find();
  res.json(results);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const updateContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updateContact) {
    throw HttpError(404, `Contact with id=${id} is not found`);
  }
  res.json(updateContact);
};

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const updateContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updateContact) {
    throw HttpError(404, `Contact with id=${id} is not found`);
  }
  res.json(updateContact);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(400, "Not found");
  }
  res.status(201).json({ message: "Delete success" });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addContact: ctrlWrapper(addContact),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
  deleteById: ctrlWrapper(deleteById),
};
