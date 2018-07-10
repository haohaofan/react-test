const MixinLog = {
  componentWillMount(){
    console.log("MixinLog componentWillMount");
  },
  componentDidMount(){
    console.log("MixinLog componentDidMount");
  },
  log(){
    console.log("调用了mixin模块...");
  }
};

export default MixinLog
