const Contact = require("../models/contact");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const results = await Contact.find();
  res.json(results);
};

// const getById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contacts.getContactById(id);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// const addContact = async (req, res) => {
//   const result = await contacts.addContact(req.body);
//   res.status(201).json(result);
// };

// const updateById = async (req, res) => {
//   const { id } = req.params;
//   const updateContact = await contacts.updateContact(id, req.body);
//   if (!updateContact) {
//     throw HttpError(404, `Contact with id=${id} is not found`);
//   }
//   res.json(updateContact);
// };

// const deleteById = async (req, res) => {
//   const { id } = req.params;
//   const result = await contacts.removeContact(id);
//   if (!result) {
//     throw HttpError(400, "Not found");
//   }
//   res.status(201).json({ message: "Delete success" });
// };

module.exports = {
  getAll: ctrlWrapper(getAll),
  //   getById: ctrlWrapper(getById),
  //   addContact: ctrlWrapper(addContact),
  //   updateById: ctrlWrapper(updateById),
  //   deleteById: ctrlWrapper(deleteById),
};
