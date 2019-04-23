/*
 * Copyright (C) 2018 Intel Corporation
 *
 * SPDX-License-Identifier: MIT
 */

window.addEventListener('engineReady', (e) => {
    // Auto save each 5 minutes
    $('#autoSaveTime').prop('value', 5);
    $('#autoSaveBox').attr('checked', true);
    $('#autoSaveBox').trigger('change');

    // Remove some buttons from menu
    $('#fullScreenButton').remove();
    $('#switchAAMButton').remove();
    $('#removeAnnotationButton').remove();

    const { annotationSaverModel } = e.detail;

    // Save annotation when user closes a page
    window.onbeforeunload = () => {
        /*
        * onbeforeunload has really strict syntax
        * in particular we can use only synchronous requests
        * if any errors occur, done work will be lost
        */
        annotationSaverModel.save(false);
    };
});
