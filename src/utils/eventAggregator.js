const eventAggregator = () => {
    const events = [];
    
    const haveEvent = (eventName) => {
        for (let i = 0; i < events.length; i+=1) {
            if (eventName === events[i]) {
                return true;
            }
        }
        return false;
    }
}