export function selectTab(tabId){
    return{
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds){
    const tabsToShow = {}
    //js por ser muito dinamico permite criar objetos dessa forma
    tabIds.forEach(id => tabsToShow[id] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}