define([],function(){function e(e,t){var r="Series Name",a="Episode Four",l=e.replace("%sn",r).replace("%s.n",r.replace(" ",".")).replace("%s_n",r.replace(" ","_")).replace("%s","1").replace("%0s","01").replace("%00s","001").replace("%ext","mkv").replace("%en",a).replace("%e.n",a.replace(" ",".")).replace("%e_n",a.replace(" ","_"));return t&&(l=l.replace("%ed","5").replace("%0ed","05").replace("%00ed","005")),l.replace("%e","4").replace("%0e","04").replace("%00e","004")}function t(e,t){var r=t.TvOptions;e.querySelector("#chkEnableTvSorting").checked=r.IsEnabled,e.querySelector("#chkOverwriteExistingEpisodes").checked=r.OverwriteExistingEpisodes,e.querySelector("#chkDeleteEmptyFolders").checked=r.DeleteEmptyFolders,e.querySelector("#txtMinFileSize").value=r.MinFileSizeMb,e.querySelector("#txtSeasonFolderPattern").value=r.SeasonFolderPattern,e.querySelector("#txtSeasonZeroName").value=r.SeasonZeroFolderName,e.querySelector("#txtWatchFolder").value=r.WatchLocations[0]||"",e.querySelector("#txtEpisodePattern").value=r.EpisodeNamePattern,e.querySelector("#txtMultiEpisodePattern").value=r.MultiEpisodeNamePattern,e.querySelector("#txtDeleteLeftOverFiles").value=r.LeftOverFileExtensionsToDelete.join(";"),e.querySelector("#copyOrMoveFile").value=r.CopyOriginalFile.toString()}function r(e){return ApiClient.getNamedConfiguration("autoorganize").then(function(t){var r=t.TvOptions;r.IsEnabled=e.querySelector("#chkEnableTvSorting").checked,r.OverwriteExistingEpisodes=e.querySelector("#chkOverwriteExistingEpisodes").checked,r.DeleteEmptyFolders=e.querySelector("#chkDeleteEmptyFolders").checked,r.MinFileSizeMb=e.querySelector("#txtMinFileSize").value,r.SeasonFolderPattern=e.querySelector("#txtSeasonFolderPattern").value,r.SeasonZeroFolderName=e.querySelector("#txtSeasonZeroName").value,r.EpisodeNamePattern=e.querySelector("#txtEpisodePattern").value,r.MultiEpisodeNamePattern=e.querySelector("#txtMultiEpisodePattern").value,r.LeftOverFileExtensionsToDelete=e.querySelector("#txtDeleteLeftOverFiles").value.split(";");var a=e.querySelector("#txtWatchFolder").value;r.WatchLocations=a?[a]:[],r.CopyOriginalFile=e.querySelector("#copyOrMoveFile").value,ApiClient.updateNamedConfiguration("autoorganize",t).then(Dashboard.processServerConfigurationUpdateResult,Dashboard.processErrorResponse)}),!1}function a(){return[{href:"autoorganizelog.html",name:Globalize.translate("TabActivityLog")},{href:"autoorganizetv.html",name:Globalize.translate("TabTV")},{href:"autoorganizesmart.html",name:Globalize.translate("TabSmartMatches")}]}return function(l){function n(){var e=l.querySelector("#txtSeasonFolderPattern").value;e=e.replace("%s","1").replace("%0s","01").replace("%00s","001");var t=Globalize.translate("OrganizePatternResult").replace("{0}",e);l.querySelector(".seasonFolderFieldDescription").innerHTML=t}function o(){var t=l.querySelector("#txtEpisodePattern").value,r=e(t,!1),a=Globalize.translate("OrganizePatternResult").replace("{0}",r);l.querySelector(".episodePatternDescription").innerHTML=a}function i(){var t=l.querySelector("#txtMultiEpisodePattern").value,r=e(t,!1),a=Globalize.translate("OrganizePatternResult").replace("{0}",r);l.querySelector(".multiEpisodePatternDescription").innerHTML=a}function c(){require(["directorybrowser"],function(e){var t=new e;t.show({callback:function(e){e&&(l.querySelector("#txtWatchFolder").value=e),t.close()},header:Globalize.translate("HeaderSelectWatchFolder"),instruction:Globalize.translate("HeaderSelectWatchFolderHelp")})})}l.querySelector("#txtSeasonFolderPattern").addEventListener("change",n),l.querySelector("#txtSeasonFolderPattern").addEventListener("keyup",n),l.querySelector("#txtEpisodePattern").addEventListener("change",o),l.querySelector("#txtEpisodePattern").addEventListener("keyup",o),l.querySelector("#txtMultiEpisodePattern").addEventListener("change",i),l.querySelector("#txtMultiEpisodePattern").addEventListener("keyup",i),l.querySelector("#btnSelectWatchFolder").addEventListener("click",c),l.querySelector(".libraryFileOrganizerForm").addEventListener("submit",function(e){return e.preventDefault(),r(l),!1}),l.addEventListener("viewshow",function(){LibraryMenu.setTabs("autoorganize",1,a),ApiClient.getNamedConfiguration("autoorganize").then(function(e){t(l,e),n(),o(),i()})})}});