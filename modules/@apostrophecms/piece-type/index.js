module.exports = {
  handlers(self) {
    return {
      afterPublish: {
        logPublished (req, data) {
          console.log(`Published ${data.published.title}`);
        }
      }
    };
  }
};
