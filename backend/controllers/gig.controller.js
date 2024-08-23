import createError from "../utils/createError.js";
import Gig from "../models/gig.model.js";
import User from "../models/user.model.js";

// create gig should have gig.userId ==curruser._id modify this function otherwise other users can also create a gig for ur id
export const createGig = async (req, res, next) => {
  console.log(req.cookies);
  if (!req.isSeller) {
    return next(createError(403, "only seller can create a gig"));
  }
  const newGig = new Gig({
    ...req.body,
    userId: req.userId,
  });
  try {
    const savedGig = await newGig.save();
    return res.status(201).json(savedGig);
  } catch (err) {
    console.log(err);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const currentuser = await User.findById(req.userId);
    const delgig = await Gig.findById(req.params.id);
    if (!delgig) {
      return res.status(404).send("gig not found ");
    }
    // console.log(delgig);
    const gigowner = await User.findById(delgig.userId);
    console.log(gigowner._id);
    console.log(currentuser._id);
    if (gigowner._id.toString() !== currentuser._id.toString()) {
      console.log("you can delete only ur gig ✌️");
      return next(createError(403, "you can delete only ur gigs"));
    }
    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("gig has been deleted.");
  } catch (err) {
    console.log(err);
  }
};
export const getGig = async (req, res, next) => {
  try {
    const onegig = await Gig.findById(req.params.id);
    if (!onegig) {
      return res.status(400).send("gig not found");
    }
    res.status(201).send(onegig);
  } catch (err) {
    console.log(err);
  }
};
export const getGigs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gte: q.min }),
        ...(q.max && { $lte: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };
  try {
    const gigs = await Gig.find(filters).sort({ [q.sort]: -1 });
    // res.status(200).send({ count: gigs.length, gigs });
    res.status(200).send(gigs);
  } catch (err) {
    next(err);
  }
};
